import React from 'react';
import Select from './shared/select';
import TextInput from './shared/text-input';
import LANGUAGES from '../constants/languages.constant';
import styles from './search.module.scss';

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props;

  const languages = [{ value: '', lable: 'All' }, ...LANGUAGES];

  return (
    <div className={styles.search}>
      <TextInput
        className={styles.searchInput}
        lable="Repo Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
        placeholder="Repo Search"
      />
      <Select
        className={styles.languageSelect}
        lable="Language"
        value={language}
        onChange={(value) => onLanguageChange(value)}
        options={languages}
      />
    </div>
  );
};

export default Search;
