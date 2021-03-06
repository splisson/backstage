/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import {
  RadarRing,
  RadarQuadrant,
  RadarEntry,
  TechRadarLoaderResponse,
} from './api';

const rings = new Array<RadarRing>();
rings.push({ id: 'use', name: 'USE', color: '#93c47d' });
rings.push({ id: 'trial', name: 'TRIAL', color: '#93d2c2' });
rings.push({ id: 'assess', name: 'ASSESS', color: '#fbdb84' });
rings.push({ id: 'hold', name: 'HOLD', color: '#efafa9' });

const quadrants = new Array<RadarQuadrant>();
quadrants.push({ id: 'infrastructure', name: 'Infrastructure' });
quadrants.push({ id: 'frameworks', name: 'Frameworks' });
quadrants.push({ id: 'languages', name: 'Languages' });
quadrants.push({ id: 'process', name: 'Process' });

const entries = new Array<RadarEntry>();
entries.push({
  moved: 0,
  ring: 'use',
  url: '#',
  key: 'javascript',
  id: 'javascript',
  title: 'JavaScript',
  quadrant: 'languages',
});
entries.push({
  moved: 0,
  ring: 'use',
  url: '#',
  key: 'typescript',
  id: 'typescript',
  title: 'TypeScript',
  quadrant: 'languages',
});
entries.push({
  moved: 0,
  ring: 'use',
  url: '#',
  key: 'webpack',
  id: 'webpack',
  title: 'Webpack',
  quadrant: 'frameworks',
});
entries.push({
  moved: 0,
  ring: 'use',
  url: '#',
  key: 'react',
  id: 'react',
  title: 'React',
  quadrant: 'frameworks',
});
entries.push({
  moved: 0,
  ring: 'use',
  url: '#',
  key: 'code-reviews',
  id: 'code-reviews',
  title: 'Code Reviews',
  quadrant: 'process',
});
entries.push({
  moved: 0,
  url: '#',
  key: 'mob-programming',
  id: 'mob-programming',
  title: 'Mob Programming',
  quadrant: 'process',
  ring: 'assess',
});
entries.push({
  moved: 0,
  ring: 'use',
  url: '#',
  key: 'github-actions',
  id: 'github-actions',
  title: 'GitHub Actions',
  quadrant: 'infrastructure',
});

export default function getSampleData(): Promise<TechRadarLoaderResponse> {
  return Promise.resolve({
    rings,
    quadrants,
    entries,
  });
}
