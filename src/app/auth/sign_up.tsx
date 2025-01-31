import { StyleSheet, Text, TextInput, View, TouchableOpacity } from 'react-native'
import {useState} from 'react'
import { Link, router } from 'expo-router'

import Button from '../../components/Button'

const handlePress = (): void => {
    //会員登録
    router.push('/memo/list')
}

const SignUp = (): JSX.Element => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (
        <View style={styles.container}>
            <View style={styles.inner}>
                <Text style={styles.title}>Sign Up</Text>
                <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={(text) => setEmail(text)}
                    autoCapitalize='none'
                    keyboardType='email-address'
                    placeholder='Email address'
                    textContentType='emailAddress'
                />
                <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={(text) => setPassword(text)}
                    autoCapitalize='none'
                    secureTextEntry={true}
                    placeholder='Password'
                    textContentType='password'
                />
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
