import React from "react";
import {
    AfterEffectsIcon, AWSIcon, CircleCIIcon, CPlusPlusIcon, CsharpIcon,
    CSSIcon, DockerIcon, DotNetIcon, FigmaIcon, FlaskIcon, GitIcon,
    GitHubIcon, HTMLIcon,IllustratorIcon, JavaIcon, JSIcon, MongoIcon, NodeIcon,PhotoshopIcon, PyIcon,
    ReactIcon, SplunkIcon, SQLIcon
} from "../Icons";

function Skills() {
    const Icons = {
        "Front-End Development": {
            HTML: HTMLIcon,
            CSS: CSSIcon,
            React: ReactIcon,
            Figma: FigmaIcon,
        },
        "Languages": {
            CSharp: CsharpIcon,
            CPlusPlus: CPlusPlusIcon,
            Java: JavaIcon,
            JavaScript: JSIcon,
            Python: PyIcon,
            SQL: SQLIcon,
        },
        "Back-End Development": {
            NodeJs: NodeIcon,
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
        <>
            <h2>Skills</h2>
            {Object.entries(Icons).map(([category, iconSet]) => (
                <div key={category} style={{ marginBottom: '20px', textAlign: 'center' }}>
                    <h3>{category}</h3>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
                        {Object.entries(iconSet).map(([name, Icon]) => (
                            <div key={name} style={{ textAlign: 'center', margin: '10px' }}>
                                <Icon width={50} height={50} />
                                <p style={{ fontSize: '12px' }}>{name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </>
    );
}

export default Skills;
