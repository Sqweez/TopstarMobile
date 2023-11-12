import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from "react-native";
import MainLayout from "../layouts/MainLayout";
import ClubContactCard from '../components/clubs/ClubContactCard';
import {YaMap} from 'react-native-yamap';
import WebView from 'react-native-webview';
const ContactsScreen = () => {

    const [mapLink, setMapLink] = useState(null);

    const handleClubLocate = (club) => {
        setMapLink(club.map_url)
    }

    useEffect(() => {
        setMapLink(clubs.at(0).map_url);
    }, []);

    const [clubs, setClubs] = useState([
        {
            id: 2,
            name: 'Top Star Atrium',
            address: 'Сатпаева 245/1, 3 этаж',
            instagram: 'atriumtopstar',
            accentColor: '#BBD620',
            instagramLink: 'https://www.instagram.com/atriumtopstar',
            location: null,
            phone: '+7 707 747 90 04',
            lat: '52.269389',
            lon: '76.943300',
            map_url: 'https://yandex.ru/map-widget/v1/?um=constructor%3A09fcfd09badf8c4f5c486d10120357c32800e71b2171eabf5f8e5d340c7cc40e&amp;source=constructor'
        },
        {
            id: 3,
            name: 'Top Star Kids',
            address: 'Сатпаева 245/1, 3 этаж',
            instagram: 'topstar_kids',
            accentColor: '#FFD600',
            instagramLink: 'https://www.instagram.com/topstar_kids',
            location: null,
            phone: '+7 707 747 90 04',
            lat: '52.269389',
            lon: '76.943300',
            map_url: 'https://yandex.ru/map-widget/v1/?um=constructor%3Aa7d289124f5f0bf5ad20be3b705f77795b2dc135fcae2d4aae1ba6d33d8b785e&amp;source=constructor'
        },
        {
            id: 1,
            name: 'Top Star Женская Студия',
            address: 'Машхура Жусупа 4/1',
            instagram: 'topstar_women',
            accentColor: '#FA00FF',
            instagramLink: 'https://www.instagram.com/topstar_women',
            location: null,
            phone: '+7 707 747 90 04',
            lat: '52.295652',
            lon: '76.950774',
            map_url: 'https://yandex.ru/map-widget/v1/?um=constructor%3A4185ae09a8a37724d4a95b93ee397f96c86e735ea7deb5bbe3401ba43622f6d9&amp;source=constructor'
        },
    ]);

    return (
        <MainLayout>
            {clubs.map((club, key) => <ClubContactCard club={club} key={key} onLocateClub={() => handleClubLocate(club)}/>)}
            { mapLink && <View style={styles.mapContainer}>
                <WebView
                    key={mapLink}
                    style={styles.map}
                    source={{uri: mapLink}}
                />
            </View>
            }
        </MainLayout>
    );
}

const styles = StyleSheet.create({
    heading: {
        marginTop: 22,
        paddingLeft: 33,
        fontSize: 12,
        color: '#fff',
        fontFamily: 'Montserrat_300Light'
    },
    contactsContainer: {
        paddingHorizontal: 35,
        marginTop: 5,
    },
    mapContainer: {
        //paddingHorizontal: 35,
        marginTop: 17,
        flex: 1,
        height: 400,
        paddingBottom: 30,
    },
    map: {
        width: '100%',
        height: '100%'
    }
});

export default ContactsScreen;
