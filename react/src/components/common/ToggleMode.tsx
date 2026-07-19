import { Moon, Sun } from 'lucide-react';
// custom
import { useTheme } from './ThemeProvider';
import { Button } from '../ui/button';
import { Icon } from './elements';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

type Props = {
  className?: string;
};

export default function ModeToggle(props: Props) {
  const { setTheme } = useTheme();

  return (
    <div className={`flex items-center gap-2 ${props.className}`}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild className="cursor-pointer">
          <Button size="icon" variant="ghost" aria-label="Select theme">
            <Icon
              name="Sun"
              className="h-[1.2rem] w-[1.2rem] text-current dark:hidden"
            />
            <Icon
              name="Moon"
              className="hidden h-[1.2rem] w-[1.2rem] text-current dark:block"
            />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('light')}
          >
            <Icon name="Sun" /> Light
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('dark')}
          >
            <Icon name="Moon" /> Dark
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => setTheme('system')}
          >
            <Icon name="Monitor" /> System
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
