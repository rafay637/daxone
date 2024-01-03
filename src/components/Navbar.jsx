import { Logo } from "./Logo";

const Navbar = () => {
    return (
        <>
            <header class="header">
                <a href="" class="logo"><Logo /></a>
                <nav class="navbar">
                    <ul class="main">
                        <li class="sub"><a class="sub1" href="">home</a></li>
                        <li class="sub"><a class="sub1" href="">products</a></li>
                        <li class="sub"><a class="sub1" href="">pages +</a>
                            <ul class="sub2">
                                <li class="sub3"><a class="sub1" href="">about</a></li>
                                <li class="sub3"><a class="sub1" href="">blogs</a></li>
                            </ul>
                        </li>
                        <li class="sub"><a class="sub1" href="">contact</a></li>
                        <li class="sub"><a class="sub1" href="">account +</a>
                            <ul class="sub2">
                                <li class="sub3"><a class="sub1" href="">login</a></li>
                                <li class="sub3"><a class="sub1" href="">register</a></li>
                            </ul>
                        </li>
                    </ul>
                </nav>

                <div class="icons">
                    <a href="" class="kart fas fa-shopping-cart"></a>
                    <div id="search-btn" class="fas fa-search"></div>
                    <div id="menu-btn" class="fas fa-bars"></div>
                </div>

                <form action="" class="search-form">
                    <input type="search" name="" placeholder="search here..." id="search-box" />
                    <label for="search-bpx" id="lalo" class="fas fa-search"></label>
                </form>

            </header>
        </>
    );
};

export { Navbar };