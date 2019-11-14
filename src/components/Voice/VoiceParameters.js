import React from 'react';
import { View } from 'react-native';
import { Icon } from 'react-native-elements';
import * as Speech from 'expo-speech';
import Voice from 'react-native-voice';

class Dictation extends React.Component {

	constructor(props) {
		super(props);
		Voice.onSpeechResults = this.onSpeechResults;
	}

	state = {
		icon: 'ios-play-circle',
		increment: null,
		language: 'en-US'
	};

	componentWillUnmount() {
		Voice.destroy().then(Voice.removeAllListeners);
	}

	startRecognizing = () => {
		try {
			Speech.stop();
			Voice.stop();
			Voice.start(this.state.language);
		} catch (e) {
			alert(e);
		}
	};

	help = () => {
		Speech.speak("Use microphone icon to start or continue recipe. List of voice commands: 'Next', 'Pause', 'Repeat', 'Stop'.", { language: this.state.language, onDone: this.startRecognizing });
	}

	start = () => {
		options = {
			language: this.state.language,
			onDone: this.startRecognizing
		}

		Speech.speak("Hi, I'm your personal assistant for this recipe. Foreach step, wait end of speech before using voice commands. We're going to start. When you are ready, say 'start' ?", options);
	}

	next = () => {
		Speech.stop();
		Speech.speak("Say 'Next' to continue, 'Stop' to close recipe, 'Repeat' to repeat last instruction or 'Pause'. Your turn !", {
			language: this.state.language,
			onDone: this.startRecognizing
		});
	}

	end = () => {
		Voice.stop();
		Speech.speak('Congratulations ! You complete this recipe !', { language: this.state.language });
		Speech.stop();
	}

	readText = () => {
		options = {
			language: this.state.language,
			onDone: this.next
		}

		if (this.state.increment > this.props.text.length) {
			this.end();
		}
		else {
			if (this.props.text[this.state.increment] !== null && this.props.text[this.state.increment] !== "" && this.props.text[this.state.increment].length > 0) {
				let increment = "Step " + this.state.increment + ". " + this.props.text[this.state.increment];
				Speech.speak(increment, options);
			}
			else
				this.next();
		}
	};

	onSpeechResults = e => {
		let speech = JSON.stringify(e.value[0]).replace(/\"/g, '');
		if (speech.length > 0 && speech !== "" && speech !== null) {
			switch (speech) {
				case "start":
					this.setState({ increment: 0 });
					Speech.speak("Right! Let's start!", { language: this.state.language, onDone: this.readText });
					break;
				case "next":
					this.setState(prevState => ({ increment: prevState.increment + 1 }));
					this.readText();
					break;
				case "pause":
				case "pose":
				case "Bose":
				case "bose":
					Speech.speak("Pause. Click on microphone icon to continue.", { language: this.state.language });
					break;
				case "stop":
					Speech.speak('Stop. Click on microphone to start again.', { language: this.state.language });
					this.setState({ increment: null });
					break;
				case "repeat":
					this.readText();
					break;
				default:
					Speech.speak("I didn't understand. Can you repeat please ?", { language: this.state.language, onDone: this.startRecognizing });
					break;
			}
			// alert(this.state.increment);
		}
	};

	render() {
		return (
			<View>
				<View style={{ flexDirection: 'row' }}>
					<View style={{ marginRight: 20 }}>
						<Icon name='ios-help-circle' size={40} color={'#fff'} type='ionicon' onPress={this.help} />
					</View>
					<View>
						<Icon name='ios-mic' size={40} color={'#fff'} type='ionicon' onPress={this.state.increment !== null ? this.next : this.start} />
					</View>
				</View>
			</View>
		)
	}
}

export default Dictation;