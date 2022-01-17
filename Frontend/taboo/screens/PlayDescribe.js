import CountDown from 'react-native-countdown-component';

export default function PlayDescribe() {
    return (
        <CountDown
            until={10}
            onFinish={() => alert('finished')}
            onPress={() => alert('hello')}
            size={20}
        />
    )
}