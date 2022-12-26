import React from 'react';
import Layout from '../../src/layout/Layout';
import EpisodeList from '../../src/components/episode/EpisodeList';
import EpisodeProvider from '../../src/providers/episode.provider';

const EpisodePage = () => {
  return (
    <EpisodeProvider>
      <Layout>
        <EpisodeList />
      </Layout>
    </EpisodeProvider>
  )
}

export default EpisodePage;