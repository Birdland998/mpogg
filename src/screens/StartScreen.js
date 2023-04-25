import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'

export default function StartScreen({ navigation }) {
  return (
    <Background>
      <Logo />
      <Header>เข้าสู่ระบบเพื่อดำเนินการต่อ</Header>
      <Paragraph>
        หากยังไม่มีอีเมลกรุณาลงทะเบียนก่อน
      </Paragraph>
      <Button
        mode="contained"
        onPress={() => navigation.navigate('LoginScreen')}
      >
        เข้าสู่ระบบ
      </Button>
      <Button
        mode="outlined"
        onPress={() => navigation.navigate('RegisterScreen')}
      >
        ลงทะเบียน
      </Button>
    </Background>
  )
}
