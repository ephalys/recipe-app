import Voice from 'react-native-voice';
import React from 'react';
import { View, FlatList, NativeModules } from 'react-native';
import { Icon } from 'react-native-elements';
import Tts from 'react-native-tts';

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

    state = {
        voices: [],
        selectedVoice: null,
    };

    componentDidMount() {
        Tts.getInitStatus().then((this.initTts), (err) => {
            if (err.code === 'no_engine') {
                Tts.requestInstallEngine();
            }
        });
    }

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
        Tts.stop();
        Tts.speak(this.props.text);
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
                <Icon name="ios-mic" size={25} type='ionicon' raised onPress={() => this.readText()} />
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