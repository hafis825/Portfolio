import CERTIFICATE_PYTHON from '../assets/img/CERTIFICATE_PYTHON.jpeg'
import CERTIFICATE_ITSUPPORT from '../assets/img/CERTIFICATE_ITSUPPORT.jpeg'
import Mikrotik from '../assets/img/Mikrotik.jpg'

export const data = [
    {
        title: "Google IT Automation with Python",
        link: "https://www.coursera.org/account/accomplishments/specialization/35YP9F6X88RS",
        descriptions: [
            "A Automate tasks by writing Python scripts.",
            "Manage IT resources at scale, both for physical machines and virtual machines in the cloud.",
            "Analyze real-world IT problems and implement the appropriate strategies to solve those problems."
        ],
        skills: [
            ["GitHub", "Python","Cloud Server"]
        ],
        picture: CERTIFICATE_PYTHON,

    },
    {
        title: "Google IT Support",
        link: "https://www.coursera.org/account/accomplishments/specialization/E7NCLKSAQQEY",
        descriptions: [
            "Gain skills required to succeed in an entry-level IT job.",
            "Learn to perform day-to-day IT support tasks including computer assembly, wireless networking, installing programs, and customer service.",
            "Learn how to provide end-to-end customer support, ranging from identifying problems to troubleshooting and debugging."
        ],
        picture: CERTIFICATE_ITSUPPORT,

    },
    {
        title: "Mikrotik Certificate (MTCNA)",
        descriptions: [
            "การอบรมและทดสอบเพื่อออกใบรับรอง Certificate ในหลักสูตร MTCNA สำหรับการจัดการระบบเครือข่ายให้กับครูและนักศึกษา รุ่นที่ 1 ระหว่างวันที่ 10 - 12 สิงหาคม 2567 จัดโดยเเผนกวิชาเทคโนโลยีสารสนเทศ ณ ศูนย์ไมโครติก อาคาเดมี่ วิทยาลัยการอาชีพปัตตานี"
        ],
        skills: [
            ["DHCP Server", "VLAN","Firewall","Spanning Tree"]
        ],
        picture: Mikrotik,

    }
]