import {Project, type ProjectProps} from "~/components/project";
import SqlIcon from "~/components/icons/sql-icon";
import ReactIcon from "~/components/icons/react-icon";
import GrpcIcon from "~/components/icons/grpc-icon";
import {DockerIcon} from "~/components/icons/docker-icon";
import React, {useState} from "react";
import {KotlinIcon} from "~/components/icons/kotlin-icon";
import {CSharpIcon} from "~/components/icons/csharp-icon";
import {UnityIcon} from "~/components/icons/unity-icon";
import {SearchInput} from "~/components/ui/search-input";
import {search} from "~/lib/search";
import {EnvoyIcon} from "~/components/icons/envoy-icon";
import {CPlusPlusIcon} from "~/components/icons/cplusplus-icon";
import {HTMLIcon} from "~/components/icons/html-icon";
import {CSSIcon} from "~/components/icons/css-icon";
import {JavaScriptIcon} from "~/components/icons/javascript-icon";

const simpleCloudProject = {
    timeframe: "12/2023 - Now",
    name: "simplecloud.app",
    link: "https://simplecloud.app",
    media: "https://github.com/simplecloudapp/branding/blob/main/images/og/simplecloud.png?raw=true",
    codeLink: "https://github.com/simplecloudapp",
    tools: [
        {name: "React", icon: () => <ReactIcon/>},
        {name: "SQL", icon: () => <SqlIcon/>},
        {name: "GRPC", icon: () => <GrpcIcon/>},
        {name: "Kotlin", icon: () => <KotlinIcon/>},
        {name: "Docker", icon: () => <DockerIcon/>},
        {name: "Envoy Proxy", icon: () => <EnvoyIcon/>},
    ],
    description: "simplecloud.app is a modern game-server network orchestration (eco)system " +
        "designed to easily create Minecraft networks. It can automatically scale game-servers up and down " +
        "and provides a user-friendly way to create both simple and more complex blueprints (templates) for game-servers. " +
        "Key features include a user-friendly CLI and dashboard for managing infrastructure both locally and remotely, " +
        "independent crash handling, a component-based architecture for customizing your own infrastructure, " +
        "support for Docker, and extensions through plugins and microservices.",
    role: "Core Maintainer",
} satisfies ProjectProps

const uneasyTravelProject = {
    timeframe: "06/2024",
    name: "Uneasy Travel",
    link: "https://github.com/dayyeeet/spacegame",
    media: "https://production-thexplace-upload-assets.s3.us-west-1.amazonaws.com/next-s3-uploads/undefined/2fb43af0-6811-488e-82f9-4b12abb7a4b5.mp4",
    video: true,
    codeLink: "https://github.com/dayyeeet/spacegame",
    tools: [
        {name: "C#", icon: () => <CSharpIcon/>},
        {name: "Unity", icon: () => <UnityIcon/>},
    ],
    description: "In this Unity 2024 summer game jam game, you are stranded in the vastness of space, " +
        "where your only means of survival is to gather flowers scattered across unknown planets. " +
        "These flowers can be converted into biofuel to keep your spaceship's fuel levels from plummeting. " +
        "However, danger lurks at every corner: terrifying creatures await to hinder your progress. " +
        "Will you gather enough flowers to fuel your escape, or will the creatures be your downfall?",
    role: "Project Leader, World Generation",
} satisfies ProjectProps

const chargerGameProject = {
    timeframe: "10/2024 - 01/2025",
    name: "Charger",
    link: "https://github.com/dayyeeet/charger-game",
    media: "https://github.com/dayyeeet/charger-game/blob/main/banner.png?raw=true",
    codeLink: "https://github.com/dayyeeet/charger-game",
    tools: [
        {name: "C#", icon: () => <CSharpIcon/>},
    ],
    description: "Charger is a fast-paced top-down shooter where players " +
        " control a robot equipped with melee and ranged weapons. " +
        "Explore procedurally generated levels, strategize your attacks, " +
        "and manage your energy-based health system " +
        "to survive against powerful enemies." +
        "This game was developed as part of a university software engineering course.",
    role: "Project Leader, World Generation",
} satisfies ProjectProps

const smartHomeProject = {
    timeframe: "09/2020 - 11/2021",
    name: "LED Stripe Controller",
    link: "https://github.com/dayyeeet/led-stripe-controller",
    media: "https://github.com/dayyeeet/led-stripe-controller/raw/master/circuit.png",
    codeLink: "https://github.com/dayyeeet/led-stripe-controller",
    tools: [
        {name: "C++", icon: () => <CPlusPlusIcon/>},
        {name: "HTML5", icon: () => <HTMLIcon/>},
        {name: "CSS", icon: () => <CSSIcon/>},
        {name: "JavaScript", icon: () => <JavaScriptIcon/>},
    ],
    description: "A lightweight collection of C++ programs/Arduino scripts " +
        "to control LED stripes using an Arduino and serial communication with an ESP Wi-Fi microcontroller. " +
        "This project allows users to send custom color data from a locally hosted website " +
        "to the Arduino to display effects in real-time. This provides Smart Home functionality in a very barebones way.",
    role: "Seminar Project",
} satisfies ProjectProps

const projectList = [simpleCloudProject, chargerGameProject, uneasyTravelProject, smartHomeProject]


export default function Projects() {
    const [projects, setProjects] = useState<ProjectProps[]>(projectList)
    const callback = (value: string) => {
        setProjects(search(value, projects))
    }
    return <div id={"projects"} className={"py-5 px-5 sm:px-20 "}>
        {projects.length > 4 ? <SearchInput className={"w-full sm:max-w-1/2 lg:max-w-96"} callback={callback}/> : null}
        <div className={"space-y-6 grid grid-cols-1 md:grid-cols-2 sm:gap-20"}>
            {projects.map(it => (
                <Project key={it.name} {...it}/>
            ))}
        </div>
    </div>
}