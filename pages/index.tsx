import { PlaylistCard } from "@/components/PlaylistCard";
import { Layout } from "@/layouts/Layout";
import Head from "next/head";

const playlistInfo = {
    focus: [
        {
            image: '/media/peaceful-piano.png',
            name: 'Paeceful Piano',
            description: 'Relax and indulge with beautiful piano pieces'
        },
        {
            image: '/media/deep-focus.png',
            name: 'Deep focus',
            description: 'Keep calm and focus with ambient and post-rock music.'
        },
        {
            image: '/media/instrumental-study.png',
            name: 'Instrumental Study',
            description: 'Focus with soft study music in the background.'
        },
        {
            image: '/media/jazz-vibes.png',
            name: 'Jazz Vibes',
            description: 'The original chill instrumental beats playlist.'
        },
        {
            image: '/media/focus-flow.png',
            name: 'Focus Flow',
            description: 'Uptempo instrumental hip hop beats.'
        },
        {
            image: '/media/workday.png',
            name: 'Workday Lounge',
            description: 'Lounge and chill out music for your workday.'
        },
        
        
    ]
}
const IndexPage = () =>{
    return (
        <>
        <Head>
            <title>Spotify</title>
        </Head>
        <Layout>
        <section className="main-content">
            <div className="playlist-section">
                <div className="playlist-section-header">
                    <h1>Focus</h1>
                    <span>Show all</span>
                </div>
                <div className="playlist-section-container">
                    {playlistInfo.focus.map((playlist, index) => {
                        return (
                            <PlaylistCard
                            key={`${playlist.name}_${index}`}
                            description={playlist.description}
                            image={playlist.image}
                            name={playlist.name}
                            />
                        );
                    })}
                </div>
            </div>
            <div className="playlist-section">
                <div className="playlist-section-header">
                    <h1>Spotify Playlists</h1>
                    <span>Show all</span>
                </div>
                <div className="playlist-section-container">
                    <PlaylistCard 
                    image='/media/top-hits.png'
                    name='Todays top hits'
                    description='PinkPantheress & Ice Spice are on top of the Hottest 50!'
                    />
                </div>
            </div>
        </section>
        </Layout>
        </>
  );
};

export default IndexPage;