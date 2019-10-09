import Select from '../classes/select';

export default () => {
  $('.js-select').each((index, select) => {
    new Select($(select)).init();
  });
};