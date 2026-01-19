import BorrowEquipment from '../assets/img/BorrowEquipment.png'
import Portfolio from '../assets/img/PortfolioGIF.gif'
import SmartHomeHub from '../assets/img/SmartHomeHub.png'
import applicationMqtt from '../assets/img/Application MQTT.gif'
import PromptPay from '../assets/img/PromptPay-QR.gif'


export const data = [
    {
        title: "Portfolio",
        descriptions: [
            "A simple and minimalist portfolio for developers built with React and TailwindCSS, designed to be clean and fast."
        ],
        titlelink: [
            ["Github"]
        ],
        linkin: [
            ["https://github.com/hafis825/Portfolio"]
        ],
        skills: [
            ["React","TailwindCSS"]
        ],
        picture: Portfolio,

    },
    {
        title: "BorrowEquipment System",
        link: "http://www.abdulhafis.free.nf/LoanSystems/",
        descriptions: [
            "A system for borrowing and returning equipment, built with HTML, Bootstrap, Sweetalert2, PHP, jQuery, Ajax, and MySQL."
        ],
        skills: [
            ["HTML","Bootstrap","Sweetalert2", "PHP", "jQuery", "Ajax", "MySQL"]
        ],
        picture: BorrowEquipment,

    },
    {
        title: "Smart Home Hub (GUI App + IOT)",
        link: "",
        descriptions: [
            "A smart home hub that allows you to control your home appliances and devices from your GUI App."
        ],
        skills: [
            ["Python","PyQt5", "MicroPython", "ESP32", "MQTT", "Mosquitto"]
        ],
        picture: SmartHomeHub,

    },
    {
        title: "Application MQTT",
        descriptions: [
            "A Python GUI application for controlling and monitoring devices using the MQTT protocol, integrated with a Mosquitto broker."
        ],
        titlelink: [
            ["Github"]
        ],
        linkin: [
            ["https://github.com/hafis825/mqtt_app"]
        ],
        skills: [
            ["Python","Tkinter", "MQTT"]
        ],
        picture: applicationMqtt,

    },
    {
        title: "PromptPay QR",
        link: "https://hafis825.github.io/PromptPay-QR-Generator/",
        descriptions: [
            "A simple PromptPay QR generator built with React and Vite, designed to be fast and easy to use."
        ],
        titlelink: [
            ["Github"]
        ],
        linkin: [
            ["https://github.com/hafis825/PromptPay-QR-Generator"]
        ],
        skills: [
            ["React","Vite", "TailwindCSS","QRCode"]
        ],
        picture: PromptPay,

    }
]
