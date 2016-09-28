import expect from 'expect';
import React from 'react';
import {mount, shallow} from 'enzyme';
import TestUtils from 'react-addons-test-utils';
import CourseForm from './CourseForm';

function setup(saving) {
  const props = {
    course: {}, saving: saving, errors: {},
    onSave: () => {},
    onChange: () => {}
  };

  return shallow(<CourseForm {...props} />);
}

describe('Тестирование -CourseForm- via Enzyme', () => {
  it('рендеринг формы и тега h1', () => {
    const wrapper = setup(false);
    expect(wrapper.find('form').length).toBe(1);
    expect(wrapper.find('h1').text()).toEqual('Управление курсом');
  });

  it('Метка "Сохранить" на кнопке сохранить, когда нет сохранения', () => {
    const wrapper = setup(false);
    expect(wrapper.find('input').props().value).toBe('Сохранить');
  });

  it('Метка "Сохранение..." на кнопке сохранить, когда сохранено', () => {
    const wrapper = setup(true);
    expect(wrapper.find('input').props().value).toBe('Сохранение...');
  });
});








