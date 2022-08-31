import MuiTimeline, {
  TimelineProps as MuiTimelineProps
} from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { ReactNode, FC, useState, useEffect, RefObject } from 'react';
import CheckIcon from '@mui/icons-material/Check';
import Fade from '@mui/material/Fade';

export interface TimelineProps extends MuiTimelineProps {
  children: ReactNode[];
  colors?: string[];
  checks?: true;
}

interface Check {
  checked: boolean;
  yLimitCoordinate: number;
}

export const Timeline: FC<TimelineProps> = ({
  children,
  position,
  colors,
  checks: checksProps
}) => {
  const [checks, setChecks] = useState<Check[]>([]);

  const setChecked = (replaceIndex: number, check: Check) => {
    const updatedChecks = [...checks];

    updatedChecks[replaceIndex] = check;

    setChecks(updatedChecks);
  };

  const onScroll = (_event: any) => {
    if (
      checks.find(
        (check) =>
          check.yLimitCoordinate <= window.pageYOffset && !check.checked
      )
    ) {
      const updatedChecks = [...checks].map((check) =>
        check.yLimitCoordinate <= window.pageYOffset
          ? { ...check, checked: true }
          : check
      );

      return setChecks(updatedChecks);
    }

    if (
      checks.find(
        (check) => check.yLimitCoordinate > window.pageYOffset && check.checked
      )
    ) {
      const updatedChecks = [...checks].map((check) =>
        check.yLimitCoordinate > window.pageYOffset
          ? { ...check, checked: false }
          : check
      );

      return setChecks(updatedChecks);
    }
  };

  useEffect(() => {
    if (checksProps) {
      setChecks(
        new Array<Check>(children.length).fill({
          checked: false,
          yLimitCoordinate: 0
        })
      );
    }
  }, [checksProps]);

  useEffect(() => {
    document.onscroll = onScroll;

    return () => {
      document.onscroll = null;
    };
  });

  return (
    <MuiTimeline
      position={position}
      sx={{ position: 'relative', left: position === 'right' ? '-60%' : '60%' }}
    >
      {children.map((child, i) => (
        <TimelineItem
          key={Math.random()}
          sx={{ width: '150%' }}
          ref={(ref: any) => {
            if (ref && i < checks.length && checks[i].yLimitCoordinate === 0) {
              setChecked(i, {
                checked: false,
                yLimitCoordinate: ref.getBoundingClientRect().top - 75
              });
            }
          }}
        >
          <TimelineSeparator>
            <TimelineDot
              variant="outlined"
              sx={{
                borderColor: colors && i < colors.length ? colors[i] : '',
                height: 25,
                width: 25
              }}
            >
              {checksProps && (
                <Fade in={checks[i]?.checked} timeout={250}>
                  <CheckIcon
                    sx={{
                      color: colors && i < colors.length ? colors[i] : ''
                    }}
                  />
                </Fade>
              )}
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>{child}</TimelineContent>
        </TimelineItem>
      ))}
    </MuiTimeline>
  );
};
