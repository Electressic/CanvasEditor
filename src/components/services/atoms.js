import {atom} from "recoil";
export const modalState = atom ( {
    key: 'modalState',
    default: false,
})
export const dataState = atom ( {
    key: 'dataState',
    default: "",
})
export const welcomeBoxImage = atom ( {
    key: 'welcomeBoxImage',
    default: "https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Headerbild_ObjProg.png?raw=true",
})
export const welcomeBoxText = atom ( {
    key: 'welcomeBoxText',
    default: "",
});
export const welcomeBoxCourse = atom ( {
    key: 'welcomeBoxCourse',
    default: "",
});
export const welcomeBoxCourse2 = atom ( {
    key: 'welcomeBoxCourse2',
    default: "",
});
export const KurseinstiegState = atom ( {
    key: 'Kurseinstieg',
    default: "",
});
export const Modulbutton = atom ( {
    key: 'modulbutton',
    default: "",
});
export const ModulplanState = atom ( {
    key: 'Modulplan',
    default: "",
});
export const OverviewState = atom ( {
    key: 'Overview',
    default: {
        items: [
            {
                icon:"",
                title:"",
                nuggets:"",
                duration:"",
            }
        ]
    },
});
export const ContactState = atom ( {
    key: 'Contacts',
    default: {
        items: [
            {
                bild:"",
                rolle:"",
                name:"",
                beschreibung:"",
                email:"",
            }
        ]
    },
});
export const ContactAvatar = atom ( {
    key: 'avatar',
    default: "",
});

//atoms for Learniac:

export const learniacWelcomeImage = atom ( {
    key: 'learniacWelcomeImage',
    default: "https://github.com/Electressic/CanvasEditor/blob/main/headerbild.png?raw=true",
});
export const learniacWelcomeCourse = atom ( {
    key: 'learniacWelcomeCourse',
    default: "",
});
export const learniacWelcomeCourse2 = atom ( {
    key: 'learniacWelcomeCourse2',
    default: "",
});
export const learniacWelcomeCourse3 = atom ( {
    key: 'learniacWelcomeCourse3',
    default: "",
});
export const learniacPointWelcomeText = atom ( {
    key: 'learniacPointWelcomeText',
    default: "Zum Durchstarten klicken Sie im Kursmenü auf der linken Seite auf Module.\n" +
        "Hier gelangen Sie zur Gesamtübersicht aller E-Learning Einheiten, den sog. Learning Nuggets.",
});
export const learniacPointWelcomeImage = atom ( {
    key: 'learniacPointWelcomeImage',
    default: "https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Element%202.png?raw=true",
});
export const learniacPointCourseText = atom ( {
    key: 'learniacPointCourseText',
    default: "Am besten arbeiten Sie von oben nach unten der Reihe nach die einzelnen Lerneinheiten durch.\n" +
        "Am Ende eines jeden Learning Nuggets erwartet Sie ein kurzer Wissenscheck, um das Gelernte\n" +
        "abschließend zu überprüfen. Sobald Sie alle Learning Nuggets bearbeitet haben, erhalten Sie\n" +
        "automatisch per E-Mail Ihre Teilnahmebescheinigung zugesendet.",
});
export const learniacPointCourseImage = atom ( {
    key: 'learniacPointCourseImage',
    default: "https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Element%203.png?raw=true",
});
export const learniacPointLearningText = atom ( {
    key: 'learniacPointLearningText',
    default: "Mit E-Learnings lernen. Eine kurze Anleitung, wie Sie die Learning Nuggets bearbeiten können\n" +
        "Sie sich gerne hier herunterladen.",
});
export const learniacPointLearningImage = atom ( {
    key: 'learniacPointLearningImage',
    default: "https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Element%204.png?raw=true",
});
export const learniacPointInfoText = atom ( {
    key: 'learniacPointInfoText',
    default: "Ab der Buchung und Bezahlung haben Sie 90 Tage Zugriff auf die Learning Nuggets.\n" +
        "Die Lehrunterlagen sind nur für den persönlichen Gebrauch vorgesehen. Daher ist von sonstiger\n" +
        "Verbreitung und Vervielfältigung abzusehen. Die Lehrunterlagen sind urheberrechtlich\n" +
        "geschützt. Das Urheberrecht liegt, soweit nicht ausdrücklich anders gekennzeichnet, bei\n" +
        "dem Graduate Campus Hochschule Aalen GmbH.",
});
export const learniacPointInfoImage = atom ( {
    key: 'learniacPointInfoImage',
    default: "https://github.com/Electressic/CanvasEditor/blob/main/src/components/images/Element%205.png?raw=true",
});
export const learniacContactsName = atom ( {
    key: 'learniacContactsName',
    default: "",
});
export const learniacContactsPhone = atom ( {
    key: 'learniacContactsPhone',
    default: "",
});
export const learniacContactsMobil = atom ( {
    key: 'learniacContactsMobil',
    default: "",
});
export const learniacContactsMail = atom ( {
    key: 'learniacContactsMail',
    default: "",
});
export const learniacContactsBild = atom ( {
    key: 'learniacContactsBild',
    default: "",
});
export const learniacModulButton = atom ( {
    key: 'learniacModulButton',
    default: "",
});
