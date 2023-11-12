import React, {useState} from 'react';
import {observer} from 'mobx-react-lite';
import {Text, View, ScrollView, Image, TouchableOpacity, StyleSheet} from 'react-native';
import COLORS from '../../styles/COLORS';
import useLoader from '../../hooks/useLoader';
import TeamMemberCard from '../../components/team/TeamMemberCard';

const TeamScreen = () => {

    const [team, setTeam] = useState([
        {
            id: 1,
            name: 'Берендеев Никита',
            position: 'Тренер эксперт',
            image: require('../../../assets/images/team/2.jpg'),
        },
        {
            id: 2,
            name: 'Берендеев Никита',
            position: 'Тренер эксперт',
            image: require('../../../assets/images/team/2.jpg'),
        },
        {
            id: 3,
            name: 'Берендеев Никита111111',
            position: 'Тренер эксперт',
            image: require('../../../assets/images/team/3.jpg'),
        },
        {
            id: 4,
            name: 'Берендеев Никита',
            position: 'Тренер эксперт',
            image: require('../../../assets/images/team/3.jpg'),
        },
    ]);


    const renderTeamCards = (members) => {
        return members.map((item, index) => <TeamMemberCard member={item} key={index} />)
    }

    return (
        <View style={{flex: 1}}>
            <ScrollView
                className='mt-5'
                style={{ paddingHorizontal: '5%'}}
                contentInset={{ bottom: 50 }}
                contentContainerStyle={{ flexDirection: 'row', flexWrap: 'wrap', alignItems: 'flex-start', justifyContent: 'space-between'}}>
                { renderTeamCards([...team, ...team, ...team]) }
            </ScrollView>
        </View>
    );
}


export default observer(TeamScreen);
