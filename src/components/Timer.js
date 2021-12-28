import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TextInput, Keyboard, Alert } from 'react-native';

const padNumber = (num, length) => {
    return String(num).padStart(length, '0');
};

const Timer = () => {
    // 아무것도 입력하지 않으면 undefined가 들어오기 때문에 유효성 검사부터..
    const tempMin = 3;
    const tempSec = 0;
    // 타이머를 초단위로 변환한 initialTime과 setInterval을 저장할 interval ref
    const initialTime = useRef(tempMin * 60 + tempSec);
    const interval = useRef(null);

    const [min, setMin] = useState(padNumber(tempMin, 2));
    const [sec, setSec] = useState(padNumber(tempSec, 2));

    useEffect(() => {
        interval.current = setInterval(() => {
            initialTime.current -= 1;
            setSec(padNumber(initialTime.current % 60, 2));
            setMin(padNumber(parseInt(initialTime.current / 60), 2));
        }, 1000);
        return () => clearInterval(interval.current);
    }, []);

    useEffect(() => {
        if (initialTime.current <= 0) {
            clearInterval(interval.current);
        }
    }, [sec]);

    return (
        <View>
            <Text>{min} : {sec}</Text>
        </View>
    );
};

export default Timer;