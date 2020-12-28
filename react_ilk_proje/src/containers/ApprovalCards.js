
import React from 'react';
import Comment from './Comment';
import faker from 'faker';
import ApprovalCard from './ApprovalCard';

const data = [
    { name: 'Gamze Zülal Civil', timeAgo: 2, star: 5, image: faker.image.image(), comment: "Selam" },
    { name: 'Ayşe Civil', timeAgo: 2, star: 5, image: faker.image.image() },
    { name: 'Lüfü Civil', timeAgo: 2, star: 5, image: faker.image.image() }
]

const ApprovalCards = (props) => {
    //<React.Fragment></React.Fragment>
    return <>
        <table>
            <tr>
                <td>
                    <div style={{ height: '100vh', padding: 12, minWidth: 200 }}>

                        {
                            data.map((row, i) => {
                                return <ApprovalCard key={i}>
                                    <Comment name={row.name}
                                        timeAgo={row.timeAgo}
                                        star={row.star}
                                        image={row.image}
                                        comment={row.comment} />
                                </ApprovalCard>
                            })
                        }


                        {/* <ApprovalCard>
                            <Comment name='Ayşe Civil'
                                timeAgo='3'
                                star='4'
                                image={faker.image.image()}
                                comment='Merhaba React2' />
                        </ApprovalCard>

                        <ApprovalCard>
                            <Comment name='Lütfü Civil' timeAgo='1'
                                star='4.5'
                                image={faker.image.image()}
                                comment='Merhaba React3' />
                        </ApprovalCard> */}
                    </div>
                </td>
                <td>
                    <div style={{ height: '100vh', padding: 12, minWidth: 200 }}>
                        Sağdan bir kart seçin..
                    </div>
                </td>

            </tr>

        </table>
    </>
}

export default ApprovalCards

const ApprovalCardTest = () => <span>Test Component</span>

export { ApprovalCardTest }
