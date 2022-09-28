import createSchema from 'part:@sanity/base/schema-creator'
import schemaTypes from 'all:part:@sanity/base/schema-type'

import header from './header';
import projects from './projects';
import work from './work';
import skill from './skill';

export default createSchema({

  name: 'default',

  types: schemaTypes.concat([
    header,
    work,
    projects,
    skill
  ]),
})
