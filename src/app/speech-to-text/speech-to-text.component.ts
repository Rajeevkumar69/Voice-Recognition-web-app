import { Component, OnInit } from '@angular/core';
import { VoiceRecognitionService } from '../service/voice-recognition.service';

@Component({
	selector: 'app-speech-to-text',
	templateUrl: './speech-to-text.component.html',
	styleUrls: ['./speech-to-text.component.scss']
})
export class SpeechToTextComponent implements OnInit {

	constructor(
		public service: VoiceRecognitionService,
	) {
		this.service.init()
	}

	ngOnInit(): void {
	}



	public startService() {
		this.service.start()

	}

	public stopService() {
		this.service.stop()
	}

}
