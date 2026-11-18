
"use client"

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import {
    Alert,
    AlertAction,
    AlertDescription,
    AlertTitle
} from '@/components/ui/alert';

import { InfoIcon } from 'lucide-react';

export function AlertDemo() {
    const [show, setShow] = useState(false);

    return (
        <div className="flex flex-col gap-4">

            <Button
                variant="outline"
                onClick={() => setShow(true)}
            >
                Show alert
            </Button>

            {show && (
                <Alert>
                    <InfoIcon />

                    <AlertTitle>Heads up!</AlertTitle>

                    <AlertDescription>
                        You can add components and dependencies
                        to your app using the cli.
                    </AlertDescription>

                    <AlertAction>
                        <Button
                            variant="outline"
                            onClick={() => setShow(false)}
                        >
                            Enable
                        </Button>
                    </AlertAction>
                </Alert>
            )}

        </div>
    );
}
