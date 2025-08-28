import React from "react";
import {
    AfterEffectsIcon, AWSIcon, CircleCIIcon, CPlusPlusIcon, CsharpIcon,
    CSSIcon, DockerIcon, DotNetIcon,ExpressIcon, FigmaIcon, FlaskIcon, FramerIcon, GitIcon,
    GitHubIcon, HTMLIcon,IllustratorIcon, JavaIcon, JSIcon, MongoIcon, NodeIcon,PhotoshopIcon, PyIcon,
    ReactIcon, SplunkIcon, SQLIcon
} from "../Icons";

function Skills() {
    const Icons = {
        "Languages": {
            CSharp: CsharpIcon,
            CPlusPlus: CPlusPlusIcon,
            Java: JavaIcon,
            JavaScript: JSIcon,
            Python: PyIcon,
            SQL: SQLIcon,
        },
        "Front-End Development": {
            HTML: HTMLIcon,
            CSS: CSSIcon,
            React: ReactIcon,
            Figma: FigmaIcon,
            Framer: FramerIcon,
        },
        "Back-End Development": {
            NodeJs: NodeIcon,
            Express: ExpressIcon,
            Flask: FlaskIcon,
            DotNet: DotNetIcon,
        },
        "Graphic Design": {
            Photoshop: PhotoshopIcon,
            AfterEffects: AfterEffectsIcon,
            Illustrator: IllustratorIcon,
            Figma: FigmaIcon,
        },
        "Cloud / DevOps": {
            AWS: AWSIcon,
            Docker: DockerIcon,
            CircleCI: CircleCIIcon,
            Git: GitIcon,
            GitHub: GitHubIcon,
            Splunk: SplunkIcon,
        },
        "DB Technology": {
            MongoDB: MongoIcon,
            MySQL: SQLIcon,
        }
    };

    return (
        <div style={{padding: "3em", display:'flex', flexDirection: "column", alignItems:"center",}}>
            <h2>Skills</h2>
            <div className={"skillGroups"}>
            {Object.entries(Icons).map(([category, iconSet]) => (
                <div key={category} style={{ flex:"1 1 33%", maxWidth:"750px",marginBottom: '20px', textAlign: 'center' }}>
                    <h5>{category}</h5>
                    <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
                        {Object.entries(iconSet).map(([name, Icon]) => (
                            <div key={name} style={{ textAlign: 'center', margin: '10px' }}>
                                <Icon width={50} height={50} />
                                <p>{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            </div>
        </div>
    );
}

export default Skills;
