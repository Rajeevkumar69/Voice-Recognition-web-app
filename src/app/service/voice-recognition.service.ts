import { Injectable } from '@angular/core';

declare var webkitSpeechRecognition: any;

@Injectable({
     providedIn: 'root'
})
export class VoiceRecognitionService {

     public recognition = new webkitSpeechRecognition();
     public isStopped: boolean = false;
     public text: string | any = '';
     public tempWords: any;

     constructor() { }

     public init() {
          this.recognition.addEventListener('result', (e: any) => {
               let transcript = Array.from(e.results)
                    .map((result: any) => result[0])
                    .map((result: any) => result.transcript)
                    .join('');
               this.tempWords = transcript;
               // console.log(transcript);
          });

     }

     public start() {
          this.isStopped = false;
          this.recognition.start();
          console.log("Speech Recognition Start");
          this.recognition.addEventListener('end', (condition: any) => {
               if (this.isStopped) {
                    this.recognition.stop();
                    // console.log("End Speech Recognition");
               } else {
                    this.wordConcat();
                    this.recognition.start();
               }
          });


     }

     public stop() {
          this.isStopped = true;
          this.wordConcat();
          this.recognition.stop();
          // console.log("End Speech Recognition");
     }

     public wordConcat() {
          this.text = this.text + this.tempWords;
     }

}
