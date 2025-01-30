import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'

import { Link, router } from 'expo-router'

import Header from '../../components/Header'
import Button from '../../components/Button'

const handlePress = (): void => {
    //会員登録
    router.push('/memo/list')
}

const SignUp = (): JSX.Element => {
    return (
        <View style={styles.container}>
            <Header />
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput style={styles.input} value='Email address' />
                <TextInput style={styles.input} value='Passwprd' />
                <Button label='Submit' onPress={handlePress}/>
                <View style={styles.footer}>
                    <Text style={styles.footerText}>Already registered?</Text>
                    <Link href='/auth/log_in' asChild>
                        <TouchableOpacity><Text style={styles.footerLink}>Log In</Text></TouchableOpacity>
                    </Link>


                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F0F4F8'
    },
    title: {
        fontSize: 24,
        lineHeight: 32,
        fontWeight: 'bold',
        marginBottom: 24
    },
    inner: {
        paddingVertical: 24,
        paddingHorizontal: 27
    },
    input: {
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#ffffff',
        padding: 8,
        height: 48,
        fontSize: 16,
        marginBottom: 24,
        borderRadius: 2
    },
    footer: {
        flexDirection: 'row'
    },
    footerText: {
        fontSize: 14,
        lineHeight: 24,
        marginRight: 8,
        color: '#000000'
    },
    footerLink: {
        fontSize: 14,
        lineHeight: 24,
        color: '#467FD3'
    }
})

export default SignUp
