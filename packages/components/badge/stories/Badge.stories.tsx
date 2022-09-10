import React from 'react';

import { Badge } from '../src/Badge/Badge';
import { Icon } from '@contentful/f36-icon';
import { Flex } from '@contentful/f36-core';
import { SectionHeading } from '@contentful/f36-typography';
import * as icons from '@contentful/f36-icons';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    propTypes: [Badge['__docgenInfo']],
  },
  argTypes: {
    className: { control: { disable: true } },
    testId: { control: { disable: true } },
    style: { control: { disable: true } },
    startIcon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
    endIcon: {
      control: {
        options: ['', ...Object.keys(icons)],
        type: 'select',
      },
    },
  },
};

export const Basic = ({ startIcon, endIcon, args }) => (
  <Badge
    {...args}
    startIcon={startIcon && <Icon as={icons[startIcon]} />}
    endIcon={endIcon && <Icon as={icons[endIcon]} />}
  />
);

Basic.args = {
  size: 'default',
  variant: 'primary',
  children: 'Published',
};

export const Overview = ({ startIcon, endIcon }) => (
  <>
    <SectionHeading as="h3" marginBottom="spacingS">
      Badge variants & sizes
    </SectionHeading>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge
          variant="primary"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          primary
        </Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge
          variant="primary"
          size="small"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          primary
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge
          variant="primary-filled"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          primary filled
        </Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge
          variant="primary-filled"
          size="small"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          primary filled
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge
          variant="positive"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          positive
        </Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge
          variant="positive"
          size="small"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          positive
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge
          variant="negative"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          negative
        </Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge
          variant="negative"
          size="small"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          negative
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge
          variant="warning"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          warning
        </Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge
          variant="warning"
          size="small"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          warning
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge
          variant="secondary"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          secondary
        </Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge
          variant="secondary"
          size="small"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          secondary
        </Badge>
      </Flex>
    </Flex>
    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS">
        <Badge
          variant="featured"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          featured
        </Badge>
      </Flex>
      <Flex marginRight="spacingS">
        <Badge
          variant="featured"
          size="small"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          featured
        </Badge>
      </Flex>
    </Flex>

    <SectionHeading as="h3" marginBottom="spacingS">
      Text Overflow
    </SectionHeading>

    <Flex marginBottom="spacingM" alignItems="center">
      <Flex marginRight="spacingS" style={{ maxWidth: '6rem' }}>
        <Badge
          variant="primary"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          Lorem Ipsum Dolor Sit Amet
        </Badge>
      </Flex>
      <Flex marginRight="spacingS" style={{ maxWidth: '6rem' }}>
        <Badge
          variant="primary"
          size="small"
          startIcon={startIcon && <Icon as={icons[startIcon]} />}
          endIcon={endIcon && <Icon as={icons[endIcon]} />}
        >
          Lorem Ipsum Dolor Sit Amet
        </Badge>
      </Flex>
    </Flex>
  </>
);
