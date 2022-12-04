import { DescriptionOutlined, InfoOutlined, LocalOfferOutlined} from "@material-ui/icons";
import { ProductContainer, Circle, Image, Info, Icon } from "./styledComponents";

const Item = ({ title, stock, cost, pictureUrl}) =>{
    return (
        <ProductContainer>
            <Circle/>
            <Image src={[pictureUrl]}/>
            <info>
                <Icon>
                    <LocalOfferOutlined /><strong>$ {price}</strong>
                </Icon>
                <Icon>
                    <DescriptionOutlined />{stock} unid.
                </Icon>
                <Icon style={{cursor: "pointer"}}>
                    <InfoOutlined />Details
                </Icon>
            </info>
        </ProductContainer>
    );
}

export default Item;