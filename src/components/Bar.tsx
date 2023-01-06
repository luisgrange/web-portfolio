import { shades } from './Styles/Theme';
interface BarProps{
    text: string,
    percent: string
}
export const Bar = (props: BarProps) => {
    const text = props.text;
    const percent = props.percent;

    return(
        <div className={`bar-${text} bar`}>
            <p><strong>{text}</strong></p>

            <div className='bar--wrapper' style={{
                background: shades.primary[100],
                height: '15px',
                width: '300px',
                position: 'relative'
            }}>
                <div className={`color-${percent}`} 
                style={{
                    background: shades.primary[500],
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    height: '100%',
                    width: `${percent}%`
                }}>

                </div>
            </div>
        </div>
    );
}