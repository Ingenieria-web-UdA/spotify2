import { PlaylistCard } from "@/components/PlaylistCard";
import { Layout } from "@/layouts/Layout";

const IndexPage = () =>{
  return (
    <Layout>
    <section className="main-content">
        <div className="playlist-section">
            <div className="playlist-section-header">
                <h1>Focus</h1>
                <span>Show all</span>
            </div>
            <div className="playlist-section-container">
                <PlaylistCard 
                image='media/peaceful-piano.png'
                name='Peaceful Piano'
                description='Relax and indulge with beautiful piano pieces'
                />
            </div>
        </div>
        <div className="playlist-section">
            <div className="playlist-section-header">
                <h1>Spotify Playlists</h1>
                <span>Show all</span>
            </div>
            <div className="playlist-section-container">
                <PlaylistCard 
                image='media/peaceful-piano.png'
                name='Peaceful Piano'
                description='Relax and indulge with beautiful piano pieces'
                 />
            </div>
        </div>

    </section>
    </Layout>
  );
};

export default IndexPage;