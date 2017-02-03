
<?
}

function complete_mail() {
        $_POST['msg'] =  substr(htmlspecialchars(trim($_POST['msg'])), 0, 1000000);
        $_POST['name'] =  substr(htmlspecialchars(trim($_POST['name'])), 0, 30);
        $_POST['email'] =  substr(htmlspecialchars(trim($_POST['email'])), 0, 50);
        // если не заполнено поле "Имя" - показываем ошибку 0
        if (empty($_POST['name']))
             output_err(0);
        // если неправильно заполнено поле email - показываем ошибку 1
        if(!preg_match("/[0-9a-z_]+@[0-9a-z_^\.]+\.[a-z]{2,3}/i", $_POST['email']))
             output_err(1);
        // если не заполнено поле "Сообщение" - показываем ошибку 2
        if(empty($_POST['msg']))
             output_err(2);
        // создаем наше сообщение
        $msg = '
        Имя отправителя:'.$_POST['name'].'
        Контактный email:'.$_POST['email'].'
        '.$_POST['msg'];
        // $to - кому отправляем
        $to = 'idreamzzer@gmail.com';
        // $from - от кого
        $from='test@test.ru';
        mail($to, $msg, "From:".$from);
        echo 'Спасибо! Ваше письмо отправлено.';
}

function output_err($num)
{
    $err[0] = 'ОШИБКА! Не введено имя.';
    $err[1] = 'ОШИБКА! Неверно введен e-mail.';
    $err[2] = 'ОШИБКА! Не введено сообщение.';
    echo '<p>'.$err[$num].'</p>';
    show_form();
    exit(); 
}

if (!empty($_POST['submit'])) complete_mail();
else show_form();
?>
