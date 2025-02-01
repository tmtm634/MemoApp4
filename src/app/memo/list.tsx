import { View, StyleSheet, FlatList } from 'react-native'
import { router, useNavigation } from 'expo-router'
import { useEffect, useState } from 'react'
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore'

import MemoListItem from '../../components/MemoListItem'
import CircleBotton from '../../components/CircleButton'
import Icon from '../../components/Icon'
import LogOutButton from '../../components/LogOutButton'
import { db, auth } from '../../config'
import { type Memo } from '../../../types/memo'

const handlePress = (): void => {
    router.push('/memo/create')
}

const List = (): JSX.Element => {
    const [memos, setMemos] = useState<Memo[]>([])
    const navigation = useNavigation()
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <LogOutButton />
            )
        })
    }, [])

    useEffect(() => {
        if (auth.currentUser === null) {
            return
        }
        const ref = collection(db, `users/${auth.currentUser?.uid}/memos`)
        const q = query(ref, orderBy('updatedAt', 'desc'))
        const unsubscribe = onSnapshot(q, (snapshot) => {
            const remmoteMemos: Memo[] = []

            snapshot.forEach((doc) => {
                const { bodyText, updatedAt } = doc.data()
                remmoteMemos.push({
                    id: doc.id,
                    bodyText,
                    updatedAt
                })
            })
            setMemos(remmoteMemos)
        })
        return () => {
            unsubscribe
        }
    }, [])

    return (
        <View style={styles.container}>
            <FlatList
                data={memos}
                renderItem={({ item }) => <MemoListItem memo={item} />}
            />
            <CircleBotton onPress={handlePress}>
                <Icon name='plus' size={40} color={'#ffffff'} />
            </CircleBotton>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})
export default List
