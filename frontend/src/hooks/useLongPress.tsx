import { useCallback, useRef, useState } from "react";

const isTouchEvent = (event: React.TouchEvent<HTMLElement>) => {
    return "touches" in event;
};

const preventDefault = (e: React.TouchEvent<HTMLElement>) => {
    if (!isTouchEvent(e)) return;
};

const useLongPress = (
    onLongPress: (e: React.TouchEvent<HTMLElement>) => void,
    onClick: (e: React.TouchEvent<HTMLElement>) => void,
    { shouldPreventDefault = true, delay = 300 } = {}
    ) => {
    const [longPressTriggered, setLongPressTriggered] = useState(false);
    const timeout = useRef<HTMLHeadingElement | EventTarget | null>(null);
    const target = useRef<HTMLHeadingElement | EventTarget | null>(null);

    const start = useCallback(
        (event: React.TouchEvent<HTMLElement>) => {
            if (shouldPreventDefault && event.target) {
                event.target.addEventListener("touchend", preventDefault as unknown as (EventListenerOrEventListenerObject | null), { 
                    passive: false
                });
                target.current = event.target;
            }
            timeout.current = setTimeout(() => {
                onLongPress(event);
                setLongPressTriggered(true);
            }, delay) as unknown as EventTarget | HTMLHeadingElement | null;
        },
        [onLongPress, delay, shouldPreventDefault]
    );

    const clear = useCallback(
        (event: React.TouchEvent<HTMLElement>, shouldTriggerClick = true) => {
            timeout.current && clearTimeout(timeout.current as unknown as number | undefined);
            shouldTriggerClick && !longPressTriggered && onClick(event);
            setLongPressTriggered(false);
            if (shouldPreventDefault && target.current) {
                target.current.removeEventListener("touchend", preventDefault  as unknown as EventListenerOrEventListenerObject);
            }
        },
        [shouldPreventDefault, onClick, longPressTriggered]
    );

    return {
        onMouseDown: (e: React.TouchEvent<HTMLElement>) => start(e),
        onTouchStart: (e: React.TouchEvent<HTMLElement>) => start(e),
        onMouseUp: (e: React.TouchEvent<HTMLElement>) => clear(e),
        onMouseLeave: (e: React.TouchEvent<HTMLElement>) => clear(e, false),
        onTouchEnd: (e: React.TouchEvent<HTMLElement>) => clear(e)
    };
};


export default useLongPress;