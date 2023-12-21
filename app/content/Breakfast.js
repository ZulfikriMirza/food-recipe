import styles from './breakfast.module.css'
import Image from 'next/image'
import cake from '../assets/cake.jpg'


export default function Breakfast() {
    return (
        <div className={`${styles.Breakfast__body} rounded-lg`}>
            <h1 className='mb-8 mt-4 font-bold text-6xl'>Breakfast</h1>
            <div className={styles.Breakfast__cardBody}>
                <div className={`${styles.Breakfast__card} flex flex-col gap-4`}>
                    <div className={styles.cardTitle}>
                        <h1 className='font-bold'>1. Lorem</h1>
                    </div>
                    <div className={styles.cardContent}>
                        <Image 
                        src={cake}
                        width={250}
                        height={250}
                        alt='Food Picture'/>
                        <div className='flex gap-4 flex-col'>
                            <ul>
                                <h2  className='font-bold'>Ingredients</h2>
                                <li>
                                    1 cup white sugar
                                </li>
                                <li>
                                    ½ cup unsalted butter
                                </li>
                                <li>
                                    2 large eggs
                                </li>
                                <li>
                                    2 teaspoons vanilla extract
                                </li>
                                <li>
                                    1 ½ cups all-purpose flour
                                </li>
                                <li>
                                    1 ¾ teaspoons baking powder
                                </li>
                            </ul>
                            <ul>
                                <h2 className='font-bold'>Steps</h2>
                                <li>
                                    1. Gather all ingredients.
                                </li>
                                <li>
                                    2. Preheat the oven to 350 degrees F (175 degrees C). Grease and flour a 9-inch square cake pan.
                                </li>
                                <li>
                                    3. Cream sugar and butter together in a mixing bowl. Add eggs, one at a time, beating briefly after each addition. Mix in vanilla.
                                </li>
                                <li>
                                    4. Combine flour and baking powder in a separate bowl. Add to the wet ingredients and mix well. Add milk and stir until smooth.
                                </li>
                                <li>
                                    5. Pour batter into the prepared cake pan.
                                </li>   
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={styles.Breakfast__card}>
                    <div>
                        <h1>2. Ipsum</h1>
                    </div>
                    <div>
                        <Image />
                    </div>
                    <div>
                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                        lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum
                        </p>
                    </div>
                </div>
                <div className={styles.Breakfast__card}>
                    <div>
                        <h1>3. Los</h1>
                    </div>
                    <div>
                        <Image />
                    </div>
                    <div>
                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    </div>
                </div>
                <div className={styles.Breakfast__card}>
                    <div>
                        <h1>4. Dos</h1>
                    </div>
                    <div>
                        <Image />
                    </div>
                    <div>
                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    </div>
                </div>
                <div className={styles.Breakfast__card}>
                    <div>
                        <h1>5. Lorem</h1>
                    </div>
                    <div>
                        <Image />
                    </div>
                    <div>
                        <p>lorem ipsum lorem ipsumlorem ipsum lorem ipsumlorem ipsumlorem ipsumlorem ipsumlorem ipsum</p>
                    </div>
                </div>
            </div>
        </div>
    )
}