import { Injectable } from '@angular/core';
import { AngularFireStorage } from '../../../node_modules/angularfire2/storage';


@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private storage: AngularFireStorage) { }

  getFile(path){
  	var file =  this.storage.ref(path);
  	return file.getDownloadURL();
  }
}
