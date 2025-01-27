const adjective = [
  'ambient',
  'analog',
  'artistic',
  'binaural',
  'bright',
  'cinematic',
  'clean',
  'cool',
  'crisp',
  'dark',
  'deep',
  'distorted',
  'dreamy',
  'dynamic',
  'electric',
  'explosive',
  'flickering',
  'fluid',
  'glitchy',
  'glowing',
  'harmonious',
  'hazy',
  'intense',
  'low-fi',
  'mellow',
  'melodic',
  'metallic',
  'moody',
  'muted',
  'nostalgic',
  'noisy',
  'organic',
  'panoramic',
  'percussive',
  'powerful',
  'psychedelic',
  'quirky',
  'raw',
  'resonant',
  'retro',
  'sharp',
  'shimmering',
  'smooth',
  'soft',
  'soulful',
  'sparkling',
  'spacious',
  'subtle',
  'surround',
  'tilted',
  'uplifting',
  'vibrant',
  'warm',
];

const object = [
  'acoustics',
  'animation',
  'audio',
  'barndoor',
  'beat',
  'brightness',
  'bulb',
  'channel',
  'chroma',
  'cinema',
  'clip',
  'color',
  'codec',
  'composition',
  'compression',
  'contrast',
  'darkness',
  'display',
  'distortion',
  'dolly',
  'downlight',
  'drum',
  'echo',
  'edit',
  'effect',
  'film',
  'fixture',
  'flash',
  'footage',
  'format',
  'floodlight',
  'flicker',
  'frame',
  'fresnel',
  'gel',
  'glow',
  'gobo',
  'groove',
  'guitar',
  'harmony',
  'highlight',
  'illumination',
  'instrument',
  'instrumental',
  'jib',
  'lamp',
  'led',
  'light',
  'luminance',
  'mastering',
  'melody',
  'microphone',
  'mix',
  'mixing',
  'moving light',
  'note',
  'pattern',
  'piano',
  'picture',
  'production',
  'record',
  'reflection',
  'reverb',
  'resolution',
  'sampler',
  'sample',
  'saxophone',
  'screen',
  'signal',
  'softlight',
  'song',
  'sound',
  'soundtrack',
  'speaker',
  'spot',
  'strobe',
  'streaming',
  'surround',
  'synth',
  'tune',
  'trumpet',
  'uplight',
  'video',
  'violin',
  'visual',
  'voice',
  'wave',
  'wash',
];

/**
 * @description returns a random name from the dictionary
 * @return {`${string} ${string}`}
 */
export default function getRandomName() {
  return `${adjective[Math.floor(Math.random() * adjective.length)]} ${
    object[Math.floor(Math.random() * object.length)]
  }`;
}
