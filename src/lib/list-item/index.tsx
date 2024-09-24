import { AccordionItem } from './components/accordion';
import { BaseListItem } from './components/base-list-item';

type ListItemType = typeof BaseListItem & {
    Accordion: typeof AccordionItem;
};

const ListItem = BaseListItem as ListItemType;

ListItem.Accordion = AccordionItem;

export default ListItem;
