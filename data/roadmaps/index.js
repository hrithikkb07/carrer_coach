import { frontendRoadmap } from "./frontend";
import { fullstackRoadmap } from "./fullstack";
import { backendRoadmap } from "./backend";
import { devopsRoadmap } from "./devops";
import { kubernetesRoadmap } from "./kubernetes";
import { dataAnalystRoadmap } from "./dataanalyst";
import { aiEngineerRoadmap } from "./aiengineerroadmap";
import { cyberSecurityRoadmap } from "./cybersecurity";
export const roadmaps = [
  frontendRoadmap,
  fullstackRoadmap,
    backendRoadmap,
    devopsRoadmap,
    kubernetesRoadmap,
    dataAnalystRoadmap,
    aiEngineerRoadmap,
    cyberSecurityRoadmap
];

export const getRoadmapBySlug = (slug) =>
  roadmaps.find((r) => r.slug === slug);
