import React from 'react';
import { View, FlatList, Button } from 'react-native';
import { Icon } from 'react-native-elements';
//import Tts from 'react-native-tts';
//import Voice from 'react-native-voice';

class Dictation extends React.Component {

    /*componentDidMount() {
        Tts.getInitStatus().then(() => {
            Tts.setDucking(true);
            Tts.setDefaultLanguage('en-IE');
            Tts.speak('Hello, world!', { androidParams: { KEY_PARAM_PAN: -1, KEY_PARAM_VOLUME: 0.5, KEY_PARAM_STREAM: 'STREAM_MUSIC' } });
            Tts.voices().then(voices => console.log(voices));
        }, (err) => {
            if (err.code === 'no_engine') {
                Tts.requestInstallEngine();
            }
        });
    }*/

    //https://medium.com/@anderanjos.ti/build-your-own-voice-assistant-with-react-native-node-js-and-watson-pt-3-mobile-app-86d7b88bb56c
    //https://aboutreact.com/react-native-text-to-speech/
    //Mots clés commandes: Start, Pause, Continue, Stop
    //Essayer de faire démarrer la reconnaissance vocale (RV) en même temps que la dictation commence sans que la RV n'écoute la dictation sinon faire un bouton pour commencer l'écoute de la RV et des mots clés commandes

    state = {
        voices: [],
        selectedVoice: null,
        icon: 'ios-play'
    };

    initTts = async () => {
        const voices = await Tts.voices();
        const availableVoices = voices
            .filter(v => !v.networkConnectionRequired && !v.notInstalled)
            .map(v => {
                return { id: v.id, name: v.name, language: v.language };
            });
        let selectedVoice = null;
        if (voices && voices.length > 0) {
            selectedVoice = voices[0].id;
            try {
                await Tts.setDefaultLanguage(voices[0].language);
            } catch (err) {
                console.log(`setDefaultLanguage error `, err);
            }
            await Tts.setDefaultVoice(voices[0].id);
            this.setState({
                voices: availableVoices,
                selectedVoice
            });
        }
    };

    onVoicePress = async voice => {
        try {
            await Tts.setDefaultLanguage(voice.language);
        } catch (err) {
            console.log(`setDefaultLanguage error `, err);
        }
        await Tts.setDefaultVoice(voice.id);
        this.setState({ selectedVoice: voice.id });
    };

    readText = async () => {
        /*Tts.getInitStatus().then((this.initTts), (err) => {
            if (err.code === 'no_engine') {
                Tts.requestInstallEngine();
            }
        });
        Tts.stop();
        Tts.speak(this.props.text);*/
        if (this.state.icon === "ios-play")
            this.setState({ icon: "ios-pause" });
        else
            this.setState({ icon: "ios-play-empty" });

        try {
            Tts.voices();
        }
        catch (err) {
            console.log(err);
        }
    };

    renderVoiceItem = ({ item }) => {
        return (
            <Button
                title={`${item.language} - ${item.name || item.id}`}
                color={this.state.selectedVoice === item.id ? undefined : "#969696"}
                onPress={() => this.onVoicePress(item)}
            />
        );
    };

    render() {
        return (
            <View>
                <View>
                    <Icon name={this.state.icon} size={35} color={'#fff'} type='ionicon' onPress={() => this.readText()} />
                </View>
                <FlatList
                    keyExtractor={item => item.id}
                    renderItem={this.renderVoiceItem}
                    extraData={this.state.selectedVoice}
                    data={this.state.voices}
                />
            </View>
        )
    }
}

export default Dictation;