import React from 'react';
import RepoListItems from './repo-list-item';
import styles from './repo-list.module.scss';

const RepoList = ({ repos, loading }) => {
  if (loading) {
    return <img src="/img/loader.gif" className={styles.loader} />;
  }
  if (!repos || repos.length === 0) {
    return <span className={styles.message}>No repositories found.</span>;
  }
  return (
    <div className={styles.repoList}>
      {repos.map((repo) => (
        <RepoListItems key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default RepoList;
