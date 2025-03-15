import { Button, Card, Row } from "antd"

const SellerSeatingMap = () => {
  return (
    <Card>
      <Row justify="space-between" className="mb-4">
        <h2 className="m-0">
          Movie List 
        </h2>
        <Button type="primary">Add New Movie</Button>
      </Row>
    </Card>
  )
}

export default SellerSeatingMap
