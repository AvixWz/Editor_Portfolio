import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Sphere } from '@react-three/drei';
import * as THREE from 'three';
import { useTheme } from '../contexts/ThemeContext';
import { motion } from 'framer-motion';

interface ClientLocation {
  name: string;
  coordinates: [number, number]; // [latitude, longitude]
  projects: number;
}

const clientLocations: ClientLocation[] = [
  { name: 'New York, USA', coordinates: [40.7128, -74.0060], projects: 12 },
  { name: 'London, UK', coordinates: [51.5074, -0.1278], projects: 8 },
  { name: 'Tokyo, Japan', coordinates: [35.6762, 139.6503], projects: 5 },
  { name: 'Sydney, Australia', coordinates: [-33.8688, 151.2093], projects: 7 },
  { name: 'Berlin, Germany', coordinates: [52.5200, 13.4050], projects: 6 },
  { name: 'Toronto, Canada', coordinates: [43.6532, -79.3832], projects: 4 },
];

const latLngToVector3 = (lat: number, lng: number, radius: number = 2) => {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);
  return new THREE.Vector3(
    -radius * Math.sin(phi) * Math.cos(theta),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta)
  );
};

const Globe: React.FC = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const { isDark } = useTheme();
  const pulseRefs = useRef<THREE.Mesh[]>([]);

  useFrame(() => {
    if (meshRef.current) meshRef.current.rotation.y += 0.0008; // slow auto rotation

    pulseRefs.current.forEach((mesh, i) => {
      mesh.scale.setScalar(1 + 0.3 * Math.sin(Date.now() * 0.002 + i));
      const material = mesh.material as THREE.MeshStandardMaterial;
      material.opacity = 0.3 + 0.2 * Math.sin(Date.now() * 0.002 + i);
      material.emissiveIntensity = 0.5 + 0.3 * Math.sin(Date.now() * 0.002 + i); // dynamic glow
    });
  });

  return (
    <group>
      {/* Globe */}
      <Sphere ref={meshRef} args={[2, 64, 64]}>
        <meshPhongMaterial
          color={isDark ? '#1a1a1a' : '#f0f0f0'}
          transparent
          opacity={0.6}
          wireframe
        />
      </Sphere>

      {/* Client locations */}
      {clientLocations.map((location, index) => {
        const position = latLngToVector3(location.coordinates[0], location.coordinates[1]);
        return (
          <group key={location.name}>
            {/* Location marker */}
            <mesh position={position}>
              <sphereGeometry args={[0.04]} />
              <meshStandardMaterial
                color="#3b82f6"
                emissive="#60a5fa"
                emissiveIntensity={0.4}
              />
            </mesh>

            {/* Pulsing glowing ring */}
            <mesh
              ref={(el) => {
                if (el) pulseRefs.current[index] = el;
              }}
              position={position}
            >
              <ringGeometry args={[0.06, 0.1, 32]} />
              <meshStandardMaterial
                color="#3b82f6"
                emissive="#8b5cf6" // glow color
                emissiveIntensity={0.5}
                transparent
                opacity={0.6}
                side={THREE.DoubleSide}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
};

const InteractiveGlobe: React.FC = () => {
  return (
    <motion.div
      className="w-full h-96 relative"
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <Canvas camera={{ position: [0, 0, 6], fov: 45 }}>
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1} />
        <Globe />
      </Canvas>

      {/* Client locations overlay */}
      <motion.div
        className="absolute top-4 right-4 bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-lg p-4 max-w-xs"
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        viewport={{ once: true }}
      >
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-2">
          Client Locations
        </h3>
        <div className="space-y-1 text-xs">
          {clientLocations.map((location) => (
            <div key={location.name} className="flex justify-between items-center">
              <span className="text-gray-600 dark:text-gray-300">{location.name}</span>
              <span className="bg-blue-500 text-white px-2 py-0.5 rounded-full text-xs">
                {location.projects}
              </span>
            </div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default InteractiveGlobe;
