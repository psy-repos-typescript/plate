'use client';

import * as React from 'react';

import { Paintbrush } from 'lucide-react';
import { createZustandStore } from 'platejs';

import { Button } from '@/components/ui/button';
import { THEME_LIST } from '@/lib/themes';

import { ThemesSwitcher } from './themes-selector-mini';

export const SettingsStore = createZustandStore(
  {
    open: false,
  },
  {
    name: 'settings',
  }
);

export function ThemesButton() {
  return (
    <div className="flex items-center">
      <div className="mr-2 flex items-center space-x-0.5">
        <ThemesSwitcher
          className="fixed inset-x-0 bottom-0 z-40 flex w-full bg-background/95 backdrop-blur-sm supports-backdrop-filter:bg-background/60 lg:sticky lg:top-20 lg:bottom-auto"
          themes={THEME_LIST}
        />
      </div>

      <Button
        size="lg"
        variant="outline"
        className="hidden h-9 md:flex"
        onClick={() => {
          SettingsStore.set('open', true);
        }}
      >
        <Paintbrush />
        Themes
      </Button>
    </div>
  );
}
