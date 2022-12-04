import ItemCount from "./ItemCount";
import { DetailContainer, WrapperDetail, ImgContainer, imageDetail, Title, Desc, Cost} from "../utils/data";
import Item from "./Item";

const imageDetail =({item}) =>{

    const onAdd = (qty) => {
        alert("seleccionaste" + qty + "item,");
    }

    return (
        <>
        {
            item.imageDetail
            ?
            <DetailContainer>
                <WrapperDetail>
                    <ImgContainer>
                        <imageDetail src={item.image[0]}/>
                    </ImgContainer>
                    <Infocontainer>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Cost>$ {item.cost}</Cost>
                        <Desc>{Item.stock} unidades en stock</Desc>
                    </Infocontainer>
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                </WrapperDetail>
            </DetailContainer> 
            : <p>Cargando..</p>
        }
        </>
    )
}