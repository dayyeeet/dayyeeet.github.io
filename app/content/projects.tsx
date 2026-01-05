import ReactIcon from "~/components/icons/react-icon";
import SqlIcon from "~/components/icons/sql-icon";
import GrpcIcon from "~/components/icons/grpc-icon";
import {KotlinIcon} from "~/components/icons/kotlin-icon";
import {CSharpIcon} from "~/components/icons/csharp-icon";
import {JavaScriptIcon} from "~/components/icons/javascript-icon";
import {CSSIcon} from "~/components/icons/css-icon";
import {HTMLIcon} from "~/components/icons/html-icon";
import {CPlusPlusIcon} from "~/components/icons/cplusplus-icon";
import {DockerIcon} from "~/components/icons/docker-icon";
import {EnvoyIcon} from "~/components/icons/envoy-icon";
import {UnityIcon} from "~/components/icons/unity-icon";
import type {ProjectProps} from "~/components/project";
import {TypeScriptIcon} from "~/components/icons/typescript-icon";

export const tools = {
    "React": <ReactIcon/>,
    "SQL": <SqlIcon/>,
    "GRPC": <GrpcIcon/>,
    "Kotlin": <KotlinIcon/>,
    "C#": <CSharpIcon/>,
    "TypeScript": <TypeScriptIcon/>,
    "JavaScript": <JavaScriptIcon/>,
    "CSS": <CSSIcon/>,
    "HTML5": <HTMLIcon/>,
    "C++": <CPlusPlusIcon/>,
    "Docker": <DockerIcon/>,
    "Envoy Proxy": <EnvoyIcon/>,
    "Unity": <UnityIcon/>,
}

export function toolInstance(id: ToolId) {
    return {name: id, icon: () => tools[id]};
}

const simpleCloudProject = {
    timeframe: "12/2023 - Now",
    name: "simplecloud.app",
    link: "https://simplecloud.app",
    media: "https://github.com/simplecloudapp/branding/blob/main/images/og/simplecloud.png?raw=true",
    codeLink: "https://github.com/simplecloudapp",
    tools: [
        toolInstance("React"),
        toolInstance("TypeScript"),
        toolInstance("SQL"),
        toolInstance("GRPC"),
        toolInstance("Kotlin"),
        toolInstance("Docker"),
        toolInstance("Envoy Proxy"),
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
        toolInstance("C#"),
        toolInstance("Unity"),
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
        toolInstance("C#"),
    ],
    description: "Charger is a fast-paced top-down shooter where players " +
        " control a robot equipped with melee and ranged weapons. " +
        "Explore procedurally generated levels, strategize your attacks, " +
        "and manage your energy-based health system " +
        "to survive against powerful enemies." +
        "This game was developed as part of a university software engineering course.",
    role: "Project Leader, Game Engine, World Generation",
} satisfies ProjectProps

const smartHomeProject = {
    timeframe: "09/2020 - 11/2021",
    name: "LED Stripe Controller",
    link: "https://github.com/dayyeeet/led-stripe-controller",
    media: "https://github.com/dayyeeet/led-stripe-controller/raw/master/circuit.png",
    codeLink: "https://github.com/dayyeeet/led-stripe-controller",
    tools: [
        toolInstance("C++"),
        toolInstance("HTML5"),
        toolInstance("CSS"),
        toolInstance("JavaScript"),
    ],
    description: "A lightweight collection of C++ programs/Arduino scripts " +
        "to control LED stripes using an Arduino and serial communication with an ESP Wi-Fi microcontroller. " +
        "This project allows users to send custom color data from a locally hosted website " +
        "to the Arduino to display effects in real-time. This provides Smart Home functionality in a very barebones way.",
    role: "Seminar Project",
} satisfies ProjectProps

export const projects = [simpleCloudProject, chargerGameProject, uneasyTravelProject, smartHomeProject]
export type ToolId = keyof typeof tools

export const toolsWeighted = Object.keys(tools).map(tool => {
    const projectAmount = projects.filter(project => project.tools.find(it => it.name == tool) != null).length
    return {tool: tool, amount: projectAmount}
}).filter(it => it.amount != 0).sort((a, b) => b.amount - a.amount)
