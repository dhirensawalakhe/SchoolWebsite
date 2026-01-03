import { useState } from 'react';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import p19 from '../../assets/p19.jpeg';
import p16 from '../../assets/p16.jpeg';
import p22 from '../../assets/p22.jpeg';  
import p27 from '../../assets/p27.jpeg';

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortOrder, setSortOrder] = useState<'default' | 'name-asc' | 'name-desc' | 'category-asc' | 'category-desc'>('default');

  const categories = ['all', 'events', 'classrooms', 'activities', 'facilities'];

  const photos = [
    { src: p19, title: 'School Entrance', category: 'facilities' },
    { src: p16, title: 'Classroom Learning', category: 'classrooms' },
    { src: p22, title: 'Students Studying', category: 'activities' },
    { src: p27, title: 'Playground', category: 'facilities' },
  ];

  const localModules = (import.meta as any).glob('/src/assets/p*.{png,jpg,jpeg,webp}', { eager: true, query: '?url', import: 'default' }) as Record<string, string>;

  const localPhotos: { src: string; title: string; category: string }[] = [];
  for (let i = 1; i <= 37; i++) {
    const baseName = `p${i}`;
    let category = 'facilities';
    if (i >= 22 && i <= 32) category = 'events';
    else if ((i >= 1 && i <= 7) || i === 16 || i === 17) category = 'activities';
    else if (i >= 34 && i <= 37) category = 'classrooms';

    const matchKey = Object.keys(localModules).find((k) =>
      k.toLowerCase().endsWith(`/${baseName}.jpg`) ||
      k.toLowerCase().endsWith(`/${baseName}.jpeg`) ||
      k.toLowerCase().endsWith(`/${baseName}.png`) ||
      k.toLowerCase().endsWith(`/${baseName}.webp`)
    );

    if (matchKey) {
      localPhotos.push({ src: localModules[matchKey], title: baseName, category });
    } else {
      localPhotos.push({ src: `https://picsum.photos/seed/gallery-${i}/1200/800`, title: baseName, category });
    }
  }

  ['l1', 'l2'].forEach((name) => {
    const key = Object.keys(localModules).find((k) =>
      k.toLowerCase().endsWith(`/${name}.jpg`) ||
      k.toLowerCase().endsWith(`/${name}.jpeg`) ||
      k.toLowerCase().endsWith(`/${name}.png`) ||
      k.toLowerCase().endsWith(`/${name}.webp`)
    );
    if (key) localPhotos.push({ src: localModules[key], title: name, category: 'facilities' });
  });

  const allPhotos = [...localPhotos];

  const sortedPhotos = (() => {
    const list = [...allPhotos];
    if (sortOrder === 'name-asc') return list.sort((a, b) => a.title.localeCompare(b.title));
    if (sortOrder === 'name-desc') return list.sort((a, b) => b.title.localeCompare(a.title));
    if (sortOrder === 'category-asc') {
      return list.sort((a, b) => {
        const c = a.category.localeCompare(b.category);
        return c !== 0 ? c : a.title.localeCompare(b.title);
      });
    }
    if (sortOrder === 'category-desc') {
      return list.sort((a, b) => {
        const c = b.category.localeCompare(a.category);
        return c !== 0 ? c : b.title.localeCompare(a.title);
      });
    }
    return list;
  })();

  const filteredPhotos =
    selectedCategory === 'all'
      ? sortedPhotos
      : sortedPhotos.filter((photo) => photo.category === selectedCategory);

  const videos = [
    {
      id: 'LztGxRxIDLA',
      title: 'Provided Video',
      embed: 'https://www.youtube.com/embed/LztGxRxIDLA',
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-900 text-white py-20">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl mb-6">Gallery</h1>
          <p className="text-xl max-w-3xl">
            Explore our campus, events, and student activities through photos and videos
          </p>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap justify-center gap-4 items-center">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full transition capitalize ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
            <div className="flex items-center gap-2 ml-2">
              <label className="text-sm text-gray-600 mr-2">Sort:</label>
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as any)}
                className="px-3 py-2 rounded-lg border border-gray-200 bg-white text-sm"
              >
                <option value="default">Default</option>
                <option value="name-asc">Name ↑</option>
                <option value="name-desc">Name ↓</option>
                <option value="category-asc">Category ↑</option>
                <option value="category-desc">Category ↓</option>
              </select>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery - Updated to 2 columns for mobile */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto">
            {filteredPhotos.map((photo, index) => (
              <div
                key={index}
                className="group relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition"
              >
                <ImageWithFallback
                  src={photo.src}
                  alt={photo.title}
                  className="w-full h-48 md:h-64 object-cover group-hover:scale-110 transition duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition flex items-end p-3 md:p-4">
                  <h3 className="text-white text-sm md:text-xl font-bold">{photo.title}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl text-center mb-12">Video Gallery</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
            {videos.map((v) => (
              <div key={v.id} className="rounded-lg overflow-hidden shadow-lg">
                <div className="aspect-video w-full">
                  <iframe
                    src={v.embed}
                    title={v.title}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 bg-white">
                  <h3 className="text-lg font-medium">{v.title}</h3>
                </div>
              </div>
            ))}
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="bg-white p-8 rounded-lg shadow-lg text-center">
              <p className="text-gray-700">
                Watch our cultural programs, student success stories, and special events
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Banner */}
      <section className="py-16 bg-gradient-to-r from-blue-700 to-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl mb-6 font-bold">Student Achievements</h2>
          <p className="text-xl max-w-3xl mx-auto">
            Our students have showcased remarkable talents in art, handicraft, sports, and various competitions
          </p>
        </div>
      </section>
    </div>
  );
}