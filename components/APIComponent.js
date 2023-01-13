export { APIComponent };
    import Link from 'next/link';
import { GetData } from './layout/getData';

function APIComponent() {
    return (
        <div class="container-fluid">
            <GetData />
        </div>
    );
}