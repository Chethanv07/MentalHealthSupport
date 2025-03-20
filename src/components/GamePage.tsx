import React, { useEffect, useState } from 'react';

interface GameData {
    gameUrl: string;
}

const GamePage: React.FC = () => {
    const [gameUrl, setGameUrl] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function loadGame() {
            try {
                // Replace with your actual game API endpoint
                const apiUrl = 'https://api.example.com/getGame';
                const response = await fetch(apiUrl);
                if (!response.ok) throw new Error('Network response was not ok');
                const data: GameData = await response.json();
                setGameUrl(data.gameUrl);
            } catch (error) {
                console.error('Error loading game:', error);
            } finally {
                setLoading(false);
            }
        }
        loadGame();
    }, []);

    return (
        <div className="container text-center py-5">
            <h1>Play Mental Health Game</h1>
            {loading ? (
                <p>Loading game, please wait...</p>
            ) : gameUrl ? (
                <iframe
                    src={gameUrl}
                    title="Mental Health Game"
                    style={{ width: '100%', height: '80vh', border: '2px solid #0a84ff', borderRadius: '10px' }}
                    allowFullScreen
                ></iframe>
            ) : (
                <p>Failed to load game. Please try again later.</p>
            )}
            <br />
            <a href="/" className="btn btn-accent mt-4" style={{ backgroundColor: '#ffc107', border: 'none' }}>
                Back to Home
            </a>
        </div>
    );
};

export default GamePage;
