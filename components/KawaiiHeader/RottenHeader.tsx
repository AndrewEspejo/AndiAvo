import React from 'react';
import { Header, Transition, Confirm } from 'semantic-ui-react';

import { PosMeMuero } from '@components/SVGIcons';

const RottenHeader = () => (
    <Header size="huge" as="h1">
        Andi
        <PosMeMuero size="58px" />
        Avos
    </Header>
);

export default RottenHeader;
