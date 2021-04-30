import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { InfoVideo } from '../interfaces/info-video';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  httpAdresse: string = "http://localhost:8000/video";
  httpAdresseDB: string = "http://localhost:3000";
  constructor(
    private http: HttpClient
  ) { }

  changeDateFormat(date: string): string {
    let newdate: string ;
    
    let dateFormat = new Date(date);
    newdate = dateFormat.getUTCDate().toString() + "/" +(dateFormat.getUTCMonth()+1).toString() + "/" + dateFormat.getFullYear().toString();
    return newdate;
  }

  getDataBJson(): Promise<InfoVideo[]> {
    return new Promise((resolve, rejects) => {
      this.http.get(this.httpAdresseDB + '/videos').subscribe((all_videos: InfoVideo[]) => {
        let resultsVideos: InfoVideo[] = [];
        for (const video of all_videos) {
          video.pubDate = this.changeDateFormat(video.pubDate);
          video.url = this.httpAdresse;
          resultsVideos.push(video);
        }
        resolve(resultsVideos);
      })
    })
  }
  getFluxVideo(name: string): Promise<any> {
    return new Promise((resolve, rejects) => {

      const httpOptions = {
        headers: new HttpHeaders({
          'Range': 'bytes=0-'
        })
      };
      this.http.post(this.httpAdresse + '/test', { name: name }, httpOptions)
        .subscribe((data: any) => {
          //this.http.get(this.httpAdresse +'/video').subscribe((data: any) => {
          console.log(data);
          resolve(data);
        })
    })
  }
  getOwnVideos(type: string): Promise<InfoVideo[]> {
    return new Promise((resolve, rejects) => {

      //faire demande check id

      //récupère l'id pour demander ses videos
      this.http.get(this.httpAdresseDB + '/profil').subscribe((data: any) => { //récupère l'id du profil

        let id_videos_profil: String[] = new Array<String>();
        let videosFound: InfoVideo[] = new Array<InfoVideo>();

        if (type == "buyed") {
          if (data["videos_id"] == undefined) rejects("Aucune vidéo");
          data["videos_id"].forEach(id => { id_videos_profil.push(id); });
        } else if (type == "published") {
          if (data["videos_published"] == undefined) rejects("Aucune vidéo");
          data["videos_published"].forEach(id => { id_videos_profil.push(id); });
        }


        this.http.get(this.httpAdresseDB + '/videos').subscribe((all_videos: InfoVideo[]) => { //compare l'id du profil avec celui des videos

          for (const video of all_videos) {
            for (const id of id_videos_profil) {
              if (video["_id"] == id) {
                video.url = this.httpAdresse;
                video.pubDate = this.changeDateFormat(video.pubDate);
                videosFound.push(video);
              }
            }
          }
          resolve(videosFound);
        });

      })
    })
  }
  getCategorieVideos(categorie: string): Promise<InfoVideo[]> {
    return new Promise((resolve, rejects) => {

      let videosFound: InfoVideo[] = new Array<InfoVideo>();

      this.http.get(this.httpAdresseDB + '/videos').subscribe((all_videos: InfoVideo[]) => { //compare la categorie avec celui des videos

        for (const video of all_videos) {
          if (video["category"] == categorie) {
            video.url = this.httpAdresse;
            video.pubDate = this.changeDateFormat(video.pubDate);
            videosFound.push(video);
          }
        }
        resolve(videosFound);
      });
    })
  }
  getCategories(): Promise<string[]>{
    return new Promise((resolve, rejects) => {
      this.http.get(this.httpAdresseDB + '/categories').subscribe((all_categories: string[]) => { //compare la categorie avec celui des videos
        resolve(all_categories);
      });
    })
  }
}
